describe('test', function(){

	it('should pass', function(){
		expect(testObject.test()).toBe(true);
	});

	it('should not pass', function(){
		expect(testObject.test()).toBe(false);
	});

});