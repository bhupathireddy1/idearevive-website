type Gtag = (...args: unknown[]) => void;

if (new URLSearchParams(location.search).has('error')) {
  const status = document.querySelector<HTMLElement>('#contact .form-status, [data-lead-form] .form-status');
  if (status) {
    status.hidden = false;
    status.textContent = 'Your message did not go through. Add your name and a phone number or email, or call or WhatsApp us.';
  }
}

document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    const status = form.querySelector<HTMLElement>('.form-status');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const data = new FormData(form);
    if (data.get('_gotcha')) { e.preventDefault(); return; }
    (window as unknown as { gtag?: Gtag }).gtag?.('event', 'generate_lead', { form_id: form.id, service: data.get('service') });

    if (form.method.toLowerCase() !== 'post') {
      e.preventDefault();
      const body = [...data.entries()]
        .filter(([k, v]) => k !== '_gotcha' && v)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `${form.action}?subject=${encodeURIComponent('New enquiry from idearevive.com')}&body=${encodeURIComponent(body)}`;
      return;
    }

    e.preventDefault();
    if (status) { status.hidden = false; status.textContent = 'Sending…'; }
    if (button) button.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      form.classList.add('is-sent');
      if (status) status.textContent = 'Thank you. Bhupathi or the team will reply within one business day.';
    } catch {
      if (status) status.textContent = 'That did not send. Please call, WhatsApp or email contact@idearevive.com.';
    } finally {
      if (button) button.disabled = false;
    }
  });
});
