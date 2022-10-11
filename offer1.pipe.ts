import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { OfferDTO } from './offer.dto';

export class RequestConverterOffer1Pipe implements PipeTransform {
  transform(body: any, metadata: ArgumentMetadata): OfferDTO[] {
    const result: OfferDTO[] = body.response.offers.map(
      (offer): OfferDTO => ({
        name: offer.offer_name,
        description: offer.offer_desc,
        requirements: offer.call_to_action,
        thumbnail: offer.image_url || offer.image_url_220x124,
        boxSize: offer.image_url
          ? OfferBoxSizeEnum.large
          : OfferBoxSizeEnum.small,
        isDesktop: offer.platform !== 'mobile' ? 1 : 0,
        isAndroid:
          offer.platform === 'mobile' && offer.device !== 'iphone_ipad' ? 1 : 0,
        isIos:
          offer.platform === 'mobile' && offer.device === 'iphone_ipad' ? 1 : 0,
        offerUrlTemplate: offer.offer_url,
        providerName: '',
        externalOfferId: offer.offer_id,
      }),
    );
    return result;
  }
}
