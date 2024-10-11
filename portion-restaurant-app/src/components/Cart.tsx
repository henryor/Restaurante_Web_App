// src/components/Cart.tsx
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"; // Importa el Input si no está
import { Plus, Minus, Trash2 } from "lucide-react"; // Asegúrate de que lucide-react esté instalado

import { CartItem } from "@/types/CartItem"; // Asegúrate de que esta ruta sea correcta

// Importa Card y sus componentes de la ruta correcta
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Asegúrate de que la ruta sea correcta

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (
    productId: number,
    portion: "full" | "half",
    newQuantity: number
  ) => void;
  onRemoveFromCart: (productId: number, portion: "full" | "half") => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  totalPrice,
}) => {
  return (
    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Tu Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[50vh] lg:h-[60vh]">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Tu carrito está vacío</p>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.portion}`}
                  className="flex items-center justify-between mb-4 text-sm"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      {item.portion === "full"
                        ? "Porción completa"
                        : "Media porción"}
                    </p>
                    <p className="text-gray-600">
                      $
                      {(item.portion === "full"
                        ? item.fullPrice
                        : item.halfPrice
                      ).toFixed(2)}{" "}
                      por unidad
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.portion,
                          item.quantity - 1
                        )
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        onUpdateQuantity(
                          item.id,
                          item.portion,
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-12 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.portion,
                          item.quantity + 1
                        )
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => onRemoveFromCart(item.id, item.portion)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch">
          <Separator className="my-4" />
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Total:</h3>
            <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <Button className="w-full" size="lg">
            Realizar Pedido
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
