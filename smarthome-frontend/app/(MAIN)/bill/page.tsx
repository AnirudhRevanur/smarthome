import React from "react";

function Bill() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div>
				According to your energy
				consumption, you will
				have to pay 'X' as your
				next current bill
			</div>
			<div>
				In order to reduce your electricity bill, reduce the use of appliance "Y"
			</div>
		</div>
	);
}

export default Bill;
