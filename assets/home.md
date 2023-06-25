# About 

Hits is a simple self hostable service for registering page views. 

It's fast, tiny and built for a most simplest of use cases. 

## Usage 

The service only has 2 API's 

&rarr; Register Hits

```sh
curl https://yourdomain.name/hit?url=https://another.domainname.com
```

&larr; Get Back Hits
```sh
curl https://yourdomain.name/hits?url=https://another.domainname.com
```

Replace `yourdomain.name` with the url/host of wherever you're hosting this service. 

and `url?=https://another.domainname.com` with the link that needs to be registered for hits

### Snippet 

Place the below lines into each page's `script` tag to register hits

```js
fetch(`https://yourdomain.name/hit?url=${window.location.href}`)
.then(r=>r.text())
```



