-- CreateTable
CREATE TABLE "ImageSizes" (
    "id" INTEGER NOT NULL,
    "srcset" TEXT NOT NULL,
    "sizes" TEXT,
    "src" TEXT NOT NULL,

    CONSTRAINT "ImageSizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageOptimized" (
    "id" INTEGER NOT NULL,
    "imageSrc" TEXT,
    "imageLazySrc" TEXT,
    "bgStyles" TEXT,
    "imageSizesId" INTEGER NOT NULL,

    CONSTRAINT "ImageOptimized_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "shipping" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productsId" INTEGER,
    "imageOptimizedId" INTEGER NOT NULL,
    "ratingId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL,
    "categories" TEXT[],
    "badges" TEXT[],
    "productsId" INTEGER NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageOptimized" ADD CONSTRAINT "ImageOptimized_imageSizesId_fkey" FOREIGN KEY ("imageSizesId") REFERENCES "ImageSizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_imageOptimizedId_fkey" FOREIGN KEY ("imageOptimizedId") REFERENCES "ImageOptimized"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
