import java.util.Arrays;

public class App {
    public static void main(String[] args) throws Exception {
        int [][] matriz = new int [3][2];

        matriz [0][0] = 1;
        matriz [0][1] = 2;

        matriz [1][0] = 3;
        matriz [1][1] = 4;

        matriz [2][0] = 5;
        matriz [2][1] = 6;

        System.out.println(Arrays.deepToString(matriz));

        System.out.println(matriz[2][0]);

            for (int linha = 0; linha < matriz.length; linha++){
                for (int  col = 0; col < matriz[linha].length; col++){
                    System.out.println(matriz[linha][col] + "");
            }
            System.out.println("");
        }
    }
}
