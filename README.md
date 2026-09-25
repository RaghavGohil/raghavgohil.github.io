# raghavgohil.github.io
Personal academic homepage.

## Writing a blog post

1. Copy `blog/posts/_template.md` to `blog/posts/<slug>.md` (lowercase letters, numbers and hyphens only) and write the post in Markdown. LaTeX maths (`$...$`, `$$...$$`) and fenced code blocks are supported.
2. Add an entry to `blog/posts.json`:

   ```json
   [
       {
           "slug": "<slug>",
           "title": "Post Title",
           "date": "YYYY-MM-DD",
           "summary": "One or two sentences shown on the blog index."
       }
   ]
   ```

   Add `"draft": true` to hide a post from the index.
3. Put images in `blog/images/` and reference them as `images/<file>`.
4. Push to `main`; GitHub Pages deploys automatically.

To preview locally, run `python -m http.server` in the repo root and open http://localhost:8000/blog/ (opening the HTML files directly will not load posts).
