/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<link href="https://chat.autofaq.ai/widget/static/css/main.css" rel="stylesheet" />
				<script
					data-widget-host="https://chat.autofaq.ai"
					data-widget-service-id="1c3476b7-4cd9-41cc-aec3-096858431fff"
					data-widget-channel-id="e7f927e4-b205-48e5-ae17-467761056ef2"
					data-widget-user-login="default"
					data-widget-user-name=""
					data-widget-user-email=""
					data-widget-user-payload='{
						"account_name": "",
						"h11_account_id":"",
						"h11_user_id":"",
						"registration_step": "not_complete"
						}'
					src="https://chat.autofaq.ai/widget/static/js/main.js"
					id="autofaqWidget"
				></script>
			</body>
		</Html>
	);
}
