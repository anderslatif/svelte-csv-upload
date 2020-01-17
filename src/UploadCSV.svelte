<script>
    import PapaParse from 'papaparse'

    export let onUpload;

	let maxFileSize = 3145728;
	let uploader;

	function uploadFile(event) {
		event.preventDefault();
		const file = uploader.files[0];

		if (file.type.includes('csv') && file.size < maxFileSize ) {

        const csvData = PapaParse.parse(
			file,
			{
				complete: (results) => {
                    onUpload ? onUpload(results.data) : console.log("Remember to define an onUpload function as props:", results.data);
				}
			}
		);

		}
	}
</script>

<input 
	bind:this={uploader}
	on:change={uploadFile} 
	type="file" 
/>
