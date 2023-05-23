/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const country = params.country;

	return {
		title: country
	};
}
