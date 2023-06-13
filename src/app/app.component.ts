import { Component } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from './model/products';
import { ProductService } from './service/productsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

constructor () {}

  // constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    // this.productService.getProducts().then(data => this.products = data);

    //     this.sortOptions = [
    //         {label: 'Price High to Low', value: '!price'},
    //         {label: 'Price Low to High', value: 'price'} 
    //     ]
    //     this.primengConfig.ripple = true; 

            
      this.products = [
        {
          id: '1',
          code: '',
          name: 'KeyCaps Color Cream ',
          description: 'keycaps Cherry profile double shot',
          price: 140,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/H202aa4c7b45d4cddb443f9fa3598c4d6V/1-conjunto-gameboy-inf-ncia-cl-ssico-retro-jogo-chave-bon-para-mx-interruptor-teclado-mec.jpg_Q90.jpg_.webp',
          rating: 3,
        },
        {
          id: '2',
          code: '',
          name: 'KeyCaps Cream + Gray',
          description: 'keycaps XDA profile double shot',
          price: 75,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/Hdcf40b5c363a495d9f5cc59a2e4cdac4I/Xda-perfil-pbt-120-teclas-keycaps-tintura-sublima-o-para-filco-cereja-ducky-ikbc-gmmk-pro.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '3',
          code: '',
          name: 'KeyCaps Gray + Ocean Blue',
          description: 'keycapsSA profile double shot',
          price: 138,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S92c7de49b4c64d548013a73c4b0b39097/172-teclas-duplo-tiro-keycaps-sa-perfil-tema-de-pesca-keycap-para-feker-rk61-ik75-nj80.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '4',
          code: '',
          name: 'KeyCaps Swamp Green',
          description: 'keycaps OEM profile double shot',
          price: 180,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/Se8fba39b32d94c3abf5309f4f9c827b9g/Conjunto-completo-de-teclas-para-teclado-mec-nico-dye-sub-p-vermelho-russo-original-altamente-sub.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '5',
          code: '',
          name: 'POP KEYS Logitech',
          description: 'mecanical keyboard ',
          price: 600,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://img.kalunga.com.br/fotosdeprodutos/671843z_2.jpg',
          rating: 4,
        },
        {
          id: '6',
          code: '',
          name: 'REDRAGON Fizz K617 ',
          description: 'mecanical keyboard',
          price: 550,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/Ha56356295023483f8e4b3e122602862by/REDRAGON-Fizz-K617-RGB-Mini-USB-Teclado-Com-Fio-Teclado-Gaming-Mec-nico-Interruptor-Vermelho-61.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '7',
          code: '',
          name: 'KeyCaps Brown',
          description: 'Keycaps double shot',
          price: 300,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae04.alicdn.com/kf/H8576414936894d418109cfbbd6f041d88/xd84pro-xd84-pro-kit-de-teclado-mecanico-personalizado-75-suporta-tkg-tools-suporte.jpg',
          rating: 4,
        },
        {
          id: '8',
          code: '',
          name: 'KeyCaps Purple',
          description: 'Keycaps cherry profile double shot',
          price: 180,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/HTB1vb00KPDpK1RjSZFrq6y78VXaI/Ymdk-teclado-gamer-branco-roxo-misto-108-87-61-ansi-perfil-oem-pbt-grosso-para-switch.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '9',
          code: '',
          name: 'KeyCaps Blue And Yellow',
          description: 'mecanical keyboard SA profile double shot',
          price: 220,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://m.media-amazon.com/images/I/71VDno43xvL.jpg',
          rating: 4,
        },
        {
          id: '10',
          code: '',
          name: 'Switch Brown',
          description: 'Switch',
          price: 40,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://www.cherrymx.de/_Resources/Persistent/b/d/b/c/bdbc919f3168f1b658e7492a114095f42b971308/CHERRY_MX_BROWN-368x368.png',
          rating: 4,
        },
        {
          id: '11',
          code: '',
          name: 'Switch Red',
          description: 'Switch Red',
          price: 89,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://www.cherrymx.de/_Resources/Persistent/7/e/b/f/7ebf9bb172cff79985becf72e58fe0c592aaaba9/CHERRY_MX_RED-368x368.png',
          rating: 4,
        },
        {
          id: '12',
          code: '',
          name: 'Switch Black',
          description: 'Switch Black',
          price: 65,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://www.cherrymx.de/_Resources/Persistent/9/7/8/d/978dc6181bbf5a46e513d84281a655ce8fdad7b1/CHERRY_MX_BLACK-368x368.png',
          rating: 4,
        },
        {
          id: '13',
          code: '',
          name: 'Switch Blue',
          description: 'Switch Blue',
          price: 50,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://s2.glbimg.com/Q7tZy_OmzGynTDe-VnI0EPRHBJE=/0x0:695x542/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/I/Y/Xz9gAhQ0mJPBNbnedDkQ/2016-11-11-blue.png',
          rating: 4,
        },
        {
          id: '14',
          code: '',
          name: 'Switch banana ',
          description: 'Switch banana ',
          price: 110,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'http://cdn.shopify.com/s/files/1/0521/7429/1118/products/c3-bns.png?v=1648547766',
          rating: 4,
        },
        {
          id: '15',
          code: '',
          name: 'Switch pink',
          description: 'Switch pink',
          price: 70,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/Ud07d5307e8ea48e08dec632179ff3f7dv/Akko-conjunto-de-interruptor-cs-45-pe-as-rosa-vermelho-matcha-verde-oceano-azul-lavanda-roxo.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '16',
          code: '',
          name: 'Switch Green',
          description: 'Switch Green',
          price: 70,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://images.kabum.com.br/produtos/fotos/364120/switch-para-teclado-akko-mecanico-linear-kit-com-45-pecas-lubrificado-matcha-green-6925758616591_1658937509_gg.jpg',
          rating: 4,
        },
        {
          id: '17',
          code: '',
          name: 'Switch Akko Mecanico',
          description: 'Switch Akko Mecanico',
          price: 120,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/k/akko-x-ttcrx.jpg',
          rating: 4,
        },
        {
          id: '18',
          code: '',
          name: 'Switch Trasnparent ',
          description: 'Switch Trasnparent ',
          price: 99,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT97PsRWsEQuUunOYdiFsklCYzRucyioINuOha8s8l2YXkoMyKBXQLlbPGNzgIWO-lSz16XVeY5emQ2knU4OTf7zpqi65kGnWm1G3ovIXmOuJNY1xRsf8lG&usqp=CAE',
          rating: 4,
        },
        {
          id: '19',
          code: '',
          name: 'MK870',
          description: 'Struckture Keyboard, Color blue translucent',
          price: 400,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae03.alicdn.com/kf/H91c78033327240708e7aca9b6e63f0345.jpg',
          rating: 4,
        },
        {
          id: '20',
          code: '',
          name: 'LK67',
          description: 'Struckture Keyboard, Color white',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/H92af7717c7ab4adebe99a708e43151edY/Teclado-gamakay-lk67-personalizado-kit-67-teclas-rgb-swappable-quente-bluetooth-3pin-5pin-interruptor-65-modo.jpg',
          rating: 4,
        },
        {
          id: '21',
          code: '',
          name: 'Pink Keyboard',
          description: 'Struckture Keyboard, Fresagem cnc',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/H07f8f240529d4240a8ae559898f4db4aZ/Teclado-gamakay-lk67-personalizado-kit-67-teclas-rgb-swappable-quente-bluetooth-3pin-5pin-interruptor-65-modo.jpg',
          rating: 4,
        },
        {
          id: '22',
          code: '',
          name: 'fragem cnc',
          description: 'Struckture Keyboard, Color pink',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/Se597a38f1e084fd2aabe6e225e6e0ff8Y/Fresagem-cnc-de-acordo-com-diy-cnc-servi-o-de-usinagem-parte-inferior-do-teclado-caso.jpg_640x640.jpg',
          rating: 4,
        },
        {
          id: '23',
          code: '',
          name: 'gateron kailh',
          description: 'uoya quente swap kit teclado mecânico rgb backlight cabo destacável com fio compatível com 3/5 pinos para cereja gateron kailh',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S6fb7a6f48bac447fb661c4cf2cdcd115u/Zuoya-quente-swap-kit-teclado-mec-nico-rgb-backlight-cabo-destac-vel-com-fio-compat-vel.jpg_640x640.jpg',
          rating: 4,
        },
        {
          id: '24',
          code: '',
          name: ' qmk',
          description: 'Acrílico cnc azul com fio kit de teclado mecânico qmk suporte através do formulário de redução de ruído quente troca scoket interruptor rgb retroiluminado 64 teclas',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S9c5e25b205284cc88ed4cd963f3f0a35x/Acr-lico-cnc-azul-com-fio-kit-de-teclado-mec-nico-qmk-suporte-atrav-s-do.jpg_Q90.jpg_.webp',
          rating: 4,
        },
        {
          id: '25',
          code: '',
          name: 'WhiteChell',
          description: 'uoya quente swap kit teclado mecânico rgb backlight cabo destacável com fio compatível com 3/5 pinos para cereja gateron kailh',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S3fac0beb429d44b79c7a74fc8cdf0a5bh/Gks68-swap-quente-personalizado-rgb-teclado-mec-nico-kit-2-4ghz-sem-fio-bluetooth-3-modo.jpg_640x640.jpg',
          rating: 4,
        },
        {
          id: '26',
          code: '',
          name: 'Black Shell',
          description: 'uoya quente swap kit teclado mecânico rgb backlight cabo destacável com fio compatível com 3/5 pinos para cereja gateron kailh',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S9b86fc302530423b924af678b5b4e725E/Gks68-swap-quente-personalizado-rgb-teclado-mec-nico-kit-2-4ghz-sem-fio-bluetooth-3-modo.jpg_640x640.jpg',
          rating: 4,
        },
        {
          id: '27',
          code: '',
          name: 'Transparent shell ',
          description: 'uoya quente swap kit teclado mecânico rgb backlight cabo destacável com fio compatível com 3/5 pinos para cereja gateron kailh',
          price: 380,
          quantity: 5,
          inventoryStatus: 'INSTOCK',
          category: 'perifericos',
          image: 'https://ae01.alicdn.com/kf/S1265a051313b49cb8225c2ba6dabc30c6/Gks68-swap-quente-personalizado-rgb-teclado-mec-nico-kit-2-4ghz-sem-fio-bluetooth-3-modo.jpg_640x640.jpg',
          rating: 4,
        },
        
      ];

      this.sortOptions = [
          {label: 'Maior preço', value: '!price'},
          {label: 'Menor preço', value: 'price'}
      ];
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
}
