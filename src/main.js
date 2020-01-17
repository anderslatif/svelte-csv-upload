import UploadCSV from './UploadCSV.svelte';

const app = new UploadCSV({
	target: document.body,
	props: {
		dataToCSV: [["hello", "nice", "okd"]]
	}
});

export default app;