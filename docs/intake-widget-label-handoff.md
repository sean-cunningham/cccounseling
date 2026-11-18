# Intake widget accessibility handoff

The public contact page embeds this iframe:

`https://admin.truebridgetherapy.com/intake-widget/widgets/intake-form-truebridge.html`

The marketing site does not own that HTML. Changing the iframe `src` or shipping
an obsolete marketing-site copy of the form would break production intake.

## Finding

First name, last name, email, phone, and message are visible in the widget but
are not programmatically associated with labels. Screen readers and browser
autofill cannot reliably name those fields.

This is an accessibility defect in the **widget project**, not in
`src/pages/contact-get-started.astro`.

## Required fix location

Use the current intake-widget source that serves
`admin.truebridgetherapy.com`, not a stale bundle in this repo.

For each of those five fields:

- Associate a visible `<label>` with the control via matching `for` / `id`, or
- Give the control a non-empty accessible name through `aria-label` only if a
  visible label cannot be shown.

Keep the existing submit event name used by the marketing page
(`intake_form_submitted`). Do not add field-value tracking.

## Out of scope for the marketing site

- Do not change the iframe destination.
- Do not submit real or synthetic production intake requests to verify this.
- Do not modify ops/admin robots policies from this repository.
