## Responsive off-canvas Nav for Foundation

Foundations Top-bar provides a decent responsive menu which toggles for small views. [[See here]](http://foundation.zurb.com/docs/components/topbar.html)

Additional to the normal top-bar, Foundation also has a really nice [Off-canvas menu](http://foundation.zurb.com/docs/components/offcanvas.html) as well. 

It seems sensible to combine the two so we get the cool off-canvas slide on for mobile views. However, Foundation doesn't provide a combination of the two by default. One possibility is to use both Nav's with Foundation's visibility classes to toggle between them for different view sizes.

### the best of both worlds

However I couldn't find a snippet of any such example. So I decided to make my own. Provided in both Haml and HTML, this structure, along with visiability classes of Foundation, achieves the desired results. Now you can have both a normal topbar and a nice collapsed off-canvas mobile menu in one.

##### but caveats…
It's worth noting however that to make this happen, we have to make two seperate Nav's in the code. Since only one is ever visiable at a time, it doesn't affect viewer experience and technically there is no restriction in HTML5 for limiting a page to a single Nav element. You just have to keep it in mind. For example, if you change a menu link, make sure you change it on both navs!

Lastly, I'd love to see this done with JS but it would not be a simple operation due to the nature of the off-canvas menu and how it encompasses the whole body of the page and has a different structure than the normal topbar nav. Perhaps in future Releases, Zurb will offer a way to use both nav's together more easily.