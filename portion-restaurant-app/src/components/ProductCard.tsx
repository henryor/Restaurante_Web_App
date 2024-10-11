// src/components/ProductCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MenuProduct } from "@/types/Product";

interface ProductCardProps {
  product: MenuProduct;
  selectedPortion: "full" | "half";
  onAddToCart: (product: MenuProduct, portion: "full" | "half") => void;
  onPortionChange: (portion: "full" | "half") => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedPortion,
  onAddToCart,
  onPortionChange,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{product.name}</CardTitle>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover mb-4 rounded-md"
        />
        <div className="flex justify-between mb-4 text-sm">
          <p>Completa: ${product.fullPrice.toFixed(2)}</p>
          <p>Media: ${product.halfPrice.toFixed(2)}</p>
        </div>
        <RadioGroup
          onValueChange={onPortionChange}
          value={selectedPortion}
          className="flex justify-center gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full" id={`full-${product.id}`} />
            <Label htmlFor={`full-${product.id}`} className="text-sm">
              Completa
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="half" id={`half-${product.id}`} />
            <Label htmlFor={`half-${product.id}`} className="text-sm">
              Media
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onAddToCart(product, selectedPortion)}
          className="w-full text-sm"
        >
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
