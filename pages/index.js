import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
     <script src="https://cdn.jsdelivr.net/npm/tripetto-runner-foundation"></script>
<script src="https://cdn.jsdelivr.net/npm/tripetto-runner-autoscroll"></script>
<script src="https://cdn.jsdelivr.net/npm/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRG9jTzF4WlIrNUJpMEgvOGh6RmNpNlR3UTRYMlJVYnU0d3dkbHMyMnBDTT0iLCJkZWZpbml0aW9uIjoiWUM1dU4yRXR5a3RPT0JIaUVoZEJvT0FpZXNoUmd5YWNZWVJVSisxbTQ2MD0iLCJ0eXBlIjoiY29sbGVjdCJ9.5MT1ZmnGxkQGLAVHhnrwoM_0jmPbu4f33JkokfaqKFU" });

TripettoAutoscroll.run({
    element: document.body, /* Or supply your own element here */
    definition: tripetto.definition,
    styles: tripetto.styles,
    l10n: tripetto.l10n,
    locale: tripetto.locale,
    translations: tripetto.translations,
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit,
    snapshot: tripetto.snapshot,
    onPause: tripetto.onPause,
    persistent: true
});
</script>
    </div>
  )
}
