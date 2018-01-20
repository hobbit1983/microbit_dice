function onShake(  ) {
	microbit.clear();
	microbit.draw(Pattern("01010.10101.01010.10101.01010"));
	wait(500);
	microbit.draw(Pattern("10101.01010.10101.01010.10101"));
	wait(500);
	microbit.draw(Pattern("01010.10101.01010.10101.01010"));
	wait(500);
	microbit.draw(Pattern("10101.01010.10101.01010.10101"));
	microbit.fadeOut(500);
	var number = Random.number(1, 6);
	if (number == 1) {
		
		microbit.draw(Pattern("00000.00000.00100.00000.00000"));
		
	}
	
	if (number == 2) {
		
		microbit.draw(Pattern("00000.00100.00000.00100.00000"));
		
	}
	
	if (number == 3) {
		
		microbit.draw(Pattern("00000.00100.00100.00100.00000"));
		
	}
	
	if (number == 4) {
		
		microbit.draw(Pattern("00000.01010.00000.01010.00000"));
		
	}
	
	if (number == 5) {
		
		microbit.draw(Pattern("00000.01010.00100.01010.00000"));
		
	}
	
	if (number == 6) {
		
		microbit.draw(Pattern("00000.01010.01010.01010.00000"));
		
	}
	
	microbit.fadeIn(500);
	
}

function onStart(  ) {
	microbit.say("Dice");
	
}

