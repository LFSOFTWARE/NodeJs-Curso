/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <stdlib.h>
int main()
{
    int arrya_size;
    
    int *v;
    int i=0 ,op=0,j=0 ;
   	v = (int*) malloc(1*4);
   
   	while(1){
   		v = (int*) realloc(v,4);
   		
   		
   		scanf("%d",&v[i]);
   		
		
		i++;
   		j++;
			printf("i: %d j: %d\n",i,j);
			
			if(i == 5)
				break;
	}
	   
	   
	printf("OLa");
	for(i=0; i <= j;i++)
		printf("%d",v[i]);
    return 0;
}

