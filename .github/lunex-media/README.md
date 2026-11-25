# Lune_X private media renderer

Processes at most one MF-approved media request per cycle. Source images, captions,
audio and deliverables stay in the private Supabase bucket and ephemeral runner
directory. No private asset is committed or uploaded as a public Actions artifact.

Authentication uses an expiring GitHub OIDC identity; no Supabase service key,
Cloudflare token or Buffer key is stored in this repository. The server pins the
repository ID, owner ID, branch, workflow path, event and audience. Pull requests,
forks and other workflows cannot claim work.

FLUX.2 klein 4B produces text-free campaign art on the connected Cloudflare Free
account. Sharp applies outlined typography and the original approved logo.
FFmpeg exports 1080x1920 H.264/AAC with a private music excerpt, full decode and
measured loudness/peak checks. A technical pass always requires MF creative review.
Nothing publishes to social networks.

Standard GitHub-hosted Linux runners in this public repository are free. The
five-minute schedule can be delayed by GitHub and is disabled after 60 days without
repository activity. This is not a guaranteed availability SLA. One lease, no
automatic retries, a 12-image/day internal ceiling and Cloudflare Free limits
bound usage; no paid model or larger runner fallback.

Only media requests with the current approved brief hash are eligible. Pause,
cancelled tasks, changed briefs and expired leases prevent delivery. A failed
provider attempt is retained and must be reviewed before any recovery.
