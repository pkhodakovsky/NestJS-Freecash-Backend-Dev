import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { OfferDTO } from './offer.dto';

export class RequestConverterPipe implements PipeTransform {
  transform(body: any, metadata: ArgumentMetadata): OfferDTO[] {
    const result: OfferDTO[] = Object.keys(body.data).map((key): OfferDTO => {
      const offer = body.data[key];
      return {
        name: offer.Offer.name,
        icon: offer.Offer.icon,
        description: offer.Offer.description,
        requirements: offer.Offer.instructions,
        thumbnail: offer.Offer.tracking_url,
        boxSize: OfferBoxSizeEnum.large,
        isDesktop: !offer.OS.web ? 1 : 0,
        isAndroid: offer.OS.android ? 1 : 0,
        isIos: offer.OS.ios ? 1 : 0,
        offerUrlTemplate: offer.Offer.tracking_url,
        providerName: 'offer2',
        externalOfferId: offer.Offer.campaign_id,
      };
    });
    return result;
  }
}
