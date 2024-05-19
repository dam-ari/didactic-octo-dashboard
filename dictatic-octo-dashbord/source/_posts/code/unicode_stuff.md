---
title: Unicode rocks 🦄 
tag: code hacks
category: coding-stuff
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