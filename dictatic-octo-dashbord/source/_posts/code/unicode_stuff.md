---
title: Unicode rocks 🦄 
date: 01/06/2024
tags: code, hacks
category: coding-stuff
background: https://github.com/dam-ari/didactic-octo-dashboard/blob/0715e4ad432c4b0c40c400c70414b695266d4d36/dictatic-octo-dashbord/source/_posts/code/cover.jpg?raw=true
---

<!-- ### Unicode -->

#### Regex to match specific language:

Replace the stars with the 4 digits of the first and last range, by the [unicode table](https://en.wikipedia.org/wiki/Unicode_block)
> [\u****-\u****]


For exampee: 
``` 
# Chinese
[\u4E00-\u9FFF]

# Hebrew
[\u0590-\u05FF]
```