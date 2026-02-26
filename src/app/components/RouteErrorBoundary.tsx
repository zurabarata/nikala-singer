import { Link, isRouteErrorResponse, useRouteError } from "react-router";

export function RouteErrorBoundary() {
  const error = useRouteError();

  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText || "Error"}`
    : "Etwas ist schiefgelaufen";

  const message =
    error instanceof Error
      ? error.message
      : "Die Seite konnte nicht geladen werden. Bitte versuche es erneut.";

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24 font-mono">
      <h1 className="text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{message}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="border border-border px-4 py-2 hover:bg-muted"
        >
          Neu laden
        </button>
        <Link
          to="/"
          className="border border-border px-4 py-2 hover:bg-muted"
        >
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
