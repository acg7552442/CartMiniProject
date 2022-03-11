import { LightningElement, api, track} from 'lwc';

export default class RewardCart extends LightningElement {

    @api rewardItems;
    
    submitItemInfo(event){
       
        this.rewardItems.push({
                                  title: event.detail.title,
                                  count:event.detail.count 
                                 }
                               )   
        console.log(this.rewardItems+" was pushed to array");     
    }

}
