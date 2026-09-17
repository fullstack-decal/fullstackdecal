# Full-Stack DeCal Showcase

A submission site: students upload a project (one file, several files, or a
whole folder) with their name; you sign in on `/admin` to browse everyone's
submissions, preview HTML files inline, and download anything.

Unlike a version built as a Claude artifact, this is a normal Next.js app —
public to anyone with the link, no Claude account required to use it — and
you deploy and own the storage yourself.

## How it's built

- **Next.js 14 (App Router)**, plain JavaScript.
- **Vercel Blob** stores the uploaded files directly from the browser
  (`@vercel/blob/client`), so folder uploads with many or large files skip
  the ~4.5 MB request-body limit a normal server upload would hit.
- **No database.** Each submission is a folder of blobs at
  `submissions/<id>/...` plus one `submissions/<id>/_meta.json` with the
  submitter's name and timestamp. The admin page lists blobs by prefix and
  groups them back into submissions — nothing to provision.
- **Admin auth** is a single password (`ADMIN_PASSWORD`) checked against a
  signed, httpOnly session cookie. There's no per-user accounts — treat it
  like a shared instructor password.

## Deploy it

1. Push this folder to a GitHub repo and import it into Vercel
   (New Project → your repo).
2. In the Vercel dashboard, go to **Storage → Create Database → Blob** and
   connect it to this project. Vercel sets `BLOB_READ_WRITE_TOKEN`
   automatically — you don't need to copy it yourself.
3. In **Settings → Environment Variables**, add:
   - `ADMIN_PASSWORD` — whatever password you want to use on `/admin`.
   - `ADMIN_SESSION_SECRET` — a random string, e.g. the output of
     `openssl rand -hex 32`.
4. Deploy. Share the site's root URL for uploads; use `/admin` yourself.

## Run it locally

```bash
npm install
cp .env.example .env.local
# fill in BLOB_READ_WRITE_TOKEN (from Vercel Storage settings),
# ADMIN_PASSWORD, and ADMIN_SESSION_SECRET in .env.local
npm run dev
```

Note: the `onUploadCompleted` callback in `app/api/upload/route.js` (just a
`console.log` here) won't fire locally, since Vercel can't reach your
localhost — that's expected and doesn't affect uploads or the admin page,
which reads directly from Blob storage rather than relying on that callback.

## Limits worth knowing

- 50 MB per individual file (set in `app/api/upload/route.js`,
  `maximumSizeInBytes` — raise it if you need to, up to Blob's 500 MB client
  upload ceiling).
- The upload page has no submission cap and no spam protection — anyone
  with the link can submit. Add a CAPTCHA or auth in front of it if that
  matters for your use.
- HTML files preview inline (rendered in a sandboxed iframe); everything
  else gets a Download link rather than a preview.
