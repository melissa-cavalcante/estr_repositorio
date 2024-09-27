import java.util.Stack;

public class App {
    public static void main(String[] args) throws Exception {
        Stack<String> pilha_pratos = new Stack<>();

        //utilizando pratos
        pilha_pratos.push("prato laranja");
        pilha_pratos.push("prato azul");
        pilha_pratos.push("prato verde");
        pilha_pratos.push("prato vermelho");

        //tamanho da pilha
        int tam = pilha_pratos.size();
        System.out.println("Tamanho da pilha é: " + tam);

        //verificar o topo da pilha
        String topo = pilha_pratos.peek();
        System.out.println("O topo da pilha é: " + topo);

        //removendo o ultimo a ser colocado na pila (o primeiro)
        String removendo = pilha_pratos.pop();
        System.out.println("Removendo o prato: " + removendo);

        System.out.println(pilha_pratos);

        //for ao contrario pq o for tem que percorrer do ultimo ao primeiro
        for (int i = pilha_pratos.size()-1; i >= 0; i--){
            System.out.println(pilha_pratos.get(i));
        }
    }
}
