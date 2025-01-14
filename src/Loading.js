/**
 * Created by USER on 1/14/2025.
 */

import spinner from './Spinner.gif'

const Loading = () => {
	return (
		<div className='loader'>
			<img src={spinner} alt="Loading" />
			<h1>Fetching Data</h1>
		</div>
	);
}

export default Loading