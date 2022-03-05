export class Foods {
  id!: number;
  price!: number;
  name!: string;
  favorite:boolean = false;
  star: 0|1|2|3|4|5 = 0;
  tags?: Array<string>;
  imageUrls!: Array<string>;
  cookTime!: string;
  origins!: Array<string>;
}
