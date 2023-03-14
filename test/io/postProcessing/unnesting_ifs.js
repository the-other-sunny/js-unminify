test1: {
	input: {
		if (c1) {
			x;
		} else {
			if (c2) {
				y;
			} else {
				z;
			}
		}
	}
	expected_output: {
		if (c1) {
			x;
		} else if (c2) {
			y;
		} else {
			z;
		}
	}
}