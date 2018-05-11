# Jenny's Portfolio
Portfolio for Jenny. Built on [Jekyll](https://jekyllrb.com).

## Running this project locally
Jenny's Portfolio uses Bundler and Jekyll. To install:
```
# Ensure bundle is installed
gem install bundler

# Install the gems
bundle install
```

Run with:
```
bundle exec jekyll serve
```

## Structure
There are three main folders you'll want to edit:
- `src/_technical-writing`: where all the technical writing files reside
- `src/_content-writing`: where all the content writing files reside
- `src/_includes`: where the About and Contact pages reside

## Adding Technical Writing or Content Writing articles
1. Navigate to the folder of the files you want to change
1. Click "Create New File" in the top right corner
1. Name your file the same as the title in lowercase, with hyphens instead of spaces, and no additional punctuation. The file format is `.md` which stands for Markdown. `Jenny's Best Title Ever = jennys-best-title-ever.md`

## Editing articles
1. Navigate to the folder of the file you want to change
1. Click on the file
1. Click on the pencil icon toward the top right corner

## Writing or editing articles
All your articles are written in [Markdown](https://daringfireball.net/projects/markdown/basics), which makes it easy to edit. The basics you'll use for this site are:
```
### For Subheadlines
_for italics_
*for bold*
[]() for links, as in [The link button](http://www.the-link-url)
And blank spaces between paragraphs
```
For full documentation visit the [Markdown website](https://daringfireball.net/projects/markdown/basics).

All of your Markdown files *must have dashes at the top* of the document. This is called [Front Matter](https://jekyllrb.com/docs/frontmatter/). Front Matter allows you to specify additional properties on the document, which are all optional. Front Matter properties for Technical Writing and Content Writing articles are:
```
---
title: Which changes the title of your document. This is useful for when you need to add punctuation to the title
date: The date of the published article. Newer dates appear first in sort order
publisher: The name of the publisher who published the article
published_url: The url of the published article (from an external site)
image_url: The url of the image from the article (from an external site)
---
```

## Saving changes
1. At the bottom of the screen is the Commit dialog
1. Enter a commit message on the first line, something like "Add Smart People with Bad Resumes Article" or "Update My Other Article".
1. Choose Commit directly to the `gh-pages` branch
1. Press Commit
