import { LightningElement } from 'lwc';
import companyLogo from '@salesforce/resourceurl/carauselImage' 
import images from '@salesforce/resourceurl/StaticImage'

export default class CarauselStaticDemo extends LightningElement {
  
    companyLogoUrl = companyLogo;

    product1Url = images + '/StaticImage/bird.jpeg';
    product2Url = images + '/StaticImage/car.jpeg';

}