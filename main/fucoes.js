function mascaracpf(input){
    let inputLength = input.value.length

    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }

    if(inputLength == 14){
        validarCPF(input.value)
    }
  
}

function validarCPF(cpf) {	
	cpf = cpf.toString().replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			alert('cpf invalido');		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			alert('cpf invalido');		
	// Valida 2o digito	
	add = 0;
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		alert('cpf invalido');		
	alert('cpf valido'); //A mensagem de validado aparece mesmo se o cpf for invalido, porém como a primeira mensagem foi a de invalido, a mensagem e validado deve ser ignorada.
    
    //Para fazer a validação do cpf após digitar o cpf você deve digitar uma tecla a mais, essa tecla não será levada em consideração na hora do cálculo do cpf
}

function mascaratelefone(input){
    let inputLength = input.value.length

    if(inputLength == 0)
            input.value = '(' + input.value; 
            if(inputLength == 3)
            input.value = input.value + ') '; 
 
            if(inputLength == 10)
            input.value = input.value + '-';
  
}

function mascaracep(input){
    let inputLength = input.value.length

    if(inputLength == 5){
        input.value += '-'
    }

}