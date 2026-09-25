This file is a template and is not published on the blog. To write a post:

1. Copy this file to `blog/posts/your-post-slug.md` (lowercase letters, numbers and hyphens only).
2. Add an entry to `blog/posts.json`:

```json
{
    "slug": "your-post-slug",
    "title": "Your Post Title",
    "date": "2026-09-24",
    "summary": "One or two sentences shown on the blog index."
}
```

Add `"draft": true` to an entry to hide it from the index while you work on it.

## Headings

Use `##` for section headings; the post title comes from `posts.json`.

## Maths

Inline maths like $E = mc^2$ or \(a^2 + b^2 = c^2\), and display maths:

$$
\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} y_i \log \hat{y}_i
$$

## Code

```python
import torch

def iou(a, b):
    return (a & b).sum() / (a | b).sum()
```

## Figures

Put images in `blog/images/` and reference them like this:

![Caption text](images/example.png)

## Citations

Write references as a list at the end:

1. R. Gohil et al., "Auto DEAP: CNN-Transformer Based Hybrid Model for Automated Pediatric Speech Misarticulation Detection," *Advances in Consumer Research*, 2025.

> Block quotes work too.
