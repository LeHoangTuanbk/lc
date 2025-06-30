function getBit(x: number, i: number) : number {
	return (x >> i) & 1;
};

function subsets(nums: number[]) : number[][] {
	const n = nums.length;
	const res : number[][] = [];
	for(let x = 0; x < (1 << n); x++) {
		const aSet: number[] = [];
		for(let i = 0; i < n; i++) {
			if(getBit(x, i)) {
				aSet.push(nums[i]);
			}
		}
        res.push(aSet);
	}	
	return res;
};