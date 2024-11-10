export interface Environment {
  ACCOUNT_ID: string;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Environment>;
