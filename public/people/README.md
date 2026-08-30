# public/people/

Portrait images that are served as-is.

The PI portrait is expected at:

```
public/people/yerin-hwang.jpg
```

The file name must match the `photo:` field in
`src/content/people/yerin-hwang.md`.

If you would rather have Astro optimise and resize the image (recommended for
large photos), put the same file in `src/assets/people/` instead — that
location is checked first. If neither file exists, the People page renders a
`YH` initials placeholder instead of a broken image.

A roughly square image of at least 480×480 px works best.
