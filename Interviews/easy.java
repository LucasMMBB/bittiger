class Solution{
	public List<Integer> question2(int a, int b){
		if (a < b){
			return question2(b, a);
		}
		List<Integer> nums = new ArrayList<Integer>();
		nums.add(a);
		nums.add(b);
		do{
			tmp = a - b;
			nums.add(tmp);
			a=b;
			b=tmp;
		}while (tmp != 0);

		return nums
	}
}
