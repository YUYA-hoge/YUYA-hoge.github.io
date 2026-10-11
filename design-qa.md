# Portfolio rebuild — 2026-10-11

Status: passed. No unresolved P0/P1/P2 issues in the checked views.

User brief: improve overall finish and consistency; retain a quiet light design with an original structure. Smaller name, Japanese headings, career “製造業 / DX推進”, GitHub and X.

## Visual review

Revised source: `/Users/yuya0205/.codex/generated_images/01a12672-a4b9-7880-ba47-c6ea3d1713c1/exec-1cf1d884-6972-42d4-a79b-a29efae9151c.png`.
Rendered desktop: `/Users/yuya0205/develop/yuyahirata/design-references/rebuild-desktop.jpg`.
Side-by-side: `/Users/yuya0205/develop/yuyahirata/design-references/rebuild-comparison.jpg`.
Mobile: `/Users/yuya0205/develop/yuyahirata/design-references/rebuild-mobile.jpg`.

- Layout: two equal project columns, identical stage aspect ratios, matching device scale and aligned description/footer sections. Mobile uses one column.
- Typography: reduced name size, Japanese section headings, consistent title/body/link scale. Name intentionally smaller than revised image to respect the user's annotation.
- Color: warm white canvas, dark text, restrained cool/warm product stages, hairline separators.
- Imagery: locally bundled matching device illustrations; product dialogs retain original supplied product images. Illustrated device images are labeled as device images rather than exact screenshots.
- Content: same concise introduction pattern for both apps; Oki visibly in development; profile integrates only supplied career and social links. No invented employment dates or company.

## Functional verification

- Viewports 1440×1600, 647×740, 375×812 checked in browser; no horizontal overflow at either narrow viewport.
- All image assets loaded at 375px.
- Both detail dialogs open with correct content. Itsu support visible only for Itsu.
- Escape and close button dismiss dialogs; native modal semantics and trigger focus restoration retained.
- GitHub and X URLs checked against requested destinations in rendered DOM.
- Browser error/warning logs empty.
- JavaScript syntax check and git diff whitespace check passed.
- Skip link changed to clipped hidden state to remove screenshot edge artifact while retaining keyboard access.
