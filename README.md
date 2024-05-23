# stopa.io 

This uses NextJS 14 with Instant Admin. We take advantage of Next's caching to pre-render every blog post. 

### Invalidation 

To trigger invalidation: 

```bash
curl -H "Secret: $SECRET" -X POST https://stopa.io/api/bust
```

