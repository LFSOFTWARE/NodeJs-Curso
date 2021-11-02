
import java.util.Scanner;

public class teste{

    static double CelFarhr(double c){

	  return  ( c * 9/5) + 32;
    }
	
 	static double CelKel(double c ){
		
		return c+273;
		
	}


    public static  void main(String[] arg){
       
        Scanner leitura = new Scanner(System.in);
	 while(true){
        System.out.println("Digite uma temperaturam em Celsius:");

        double c = leitura.nextDouble();

	
	System.out.println("Digite f para Fahrenhit ou k para Kelvin :");
	char op = leitura.next().charAt(0);
	
	if( op == 'f'){
	System.out.println("C: "+ c +" F: "+CelFarhr(c));
	}else if(op == 'k'){
		System.out.println("C: "+ c +" F: "+CelKel(c));
	}	
      	
    	
	}	
        
}
    


}