# AGENTS.md

## 1. Scope

This file defines how Codex and other AI agents must work inside the `Parking-Canopy-Design` repository.

The repository documentation is the persistent project context. Do not assume access to any external ChatGPT conversation or undocumented decision.

## 2. Source-of-truth priority

When reading project information, use the following priority:

1. `DESIGN_REQUIREMENTS.md` — binding project requirements.
2. `SITE_DATA.md` — site and parking data.
3. `DESIGN_BASIS.md` — structural/design basis and status of parameters.
4. `DECISIONS.md` — approved project decisions and history.
5. `ASSUMPTIONS.md` — working assumptions and TBC items.
6. `PROCUREMENT_STRATEGY.md` — procurement and tender philosophy.
7. `README.md` — high-level overview.

If two files appear to conflict, **do not guess or silently reconcile them**. Report the conflict and identify the exact files/sections involved.

## 3. Parameter status

Respect the parameter labels used in the repository:

- `CONFIRMED` = may be used as a project input unless superseded by a later explicit decision.
- `WORKING ASSUMPTION` = may be used for preliminary calculations only and must be identified as an assumption in outputs.
- `TBC` = must not be represented as confirmed.

Never convert a WORKING ASSUMPTION or TBC item into a confirmed requirement without an explicit project decision.

## 4. Engineering work

For calculations or technical checks:

- state inputs, units and assumptions,
- identify the applicable Eurocode/Cyprus National Annex basis,
- keep intermediate calculations traceable,
- perform sensitivity checks where an input is uncertain and materially affects the result,
- distinguish preliminary sizing from final design,
- do not describe the design as construction-ready while relevant TBC items remain open,
- do not invent site, geotechnical, material or supplier data.

Where scripts are created, keep calculations reproducible and readable by a human engineer.

## 5. Procurement neutrality

Assume the project may be issued as a public tender.

Therefore:

- avoid brands and supplier-specific specifications,
- prefer performance-based requirements,
- use standard structural designations and applicable standards,
- do not introduce proprietary geometry unless technically necessary,
- where an equivalent solution is technically acceptable, preserve that flexibility subject to the tender requirements.

Do not weaken a structural requirement merely to increase procurement flexibility.

## 6. Constructability

When proposing geometry or sections:

- prefer standard market sections,
- prefer common stock lengths,
- minimize unnecessary section variety,
- minimize waste and unnecessary welded site joints,
- preserve the Γ concept for single rows and Τ concept for double rows unless explicitly instructed otherwise,
- preserve the existing parking layout and access requirements unless a documented decision changes them.

## 7. Repository workflow

Before significant repository work:

- record the current branch,
- record the starting commit SHA,
- inspect repository status/content relevant to the task.

For significant changes:

- work on a dedicated branch,
- keep commits small and logically scoped,
- review the diff before completion,
- use a Pull Request where practical,
- do not modify unrelated files.

The initial empty-repository bootstrap is the only expected exception to the branch-first rule.

## 8. Documentation discipline

- Keep each file focused on one clear responsibility.
- Update `DECISIONS.md` when a project decision changes the design direction.
- Update `ASSUMPTIONS.md` when an assumption is added, removed, confirmed or superseded.
- Update `DESIGN_BASIS.md` when the engineering basis changes.
- Do not duplicate the same detailed information across many files; link or reference the source-of-truth file instead.

## 9. Language

The project documentation may use Greek technical prose with English filenames and standard engineering terminology. Preserve this convention unless instructed otherwise.

## 10. Safety and professional review

AI-generated engineering calculations, drawings, specifications and quantities are working project material. Final construction documents must receive the professional checks, approvals and verifications required by the applicable project, statutory and contractual framework.
