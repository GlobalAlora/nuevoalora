"use client";

const WA_NUMBER = "5491124629452";

export function WhatsAppButton({ locale }: { locale: string }) {
  const message = locale === "es"
    ? "Hola! Me interesa conocer más sobre sus servicios."
    : "Hi! I'd like to learn more about your services.";

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.734 5.47 2.018 7.773L0 32l8.466-2.018A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.763-1.845l-.485-.288-5.024 1.197 1.22-4.886-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.965c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.631-.2-.897.2-.266.398-1.03 1.294-1.263 1.56-.233.265-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.214-2.756-.233-.398-.025-.613.175-.812.18-.179.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.897-2.16-1.228-2.956-.323-.775-.65-.67-.897-.682l-.763-.013c-.266 0-.697.1-.063 1.063.632.963 2.292 3.52 2.292 3.52s2.36 3.92 7.258 5.414c1.012.348 1.802.555 2.416.71.014.003 1.014.195 1.016.196.798.133 1.53.114 2.107-.013.644-.142 1.98-.81 2.261-1.592.282-.78.282-1.45.198-1.592-.083-.142-.315-.225-.664-.365z"/>
      </svg>
    </a>
  );
}
