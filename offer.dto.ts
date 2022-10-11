import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class OfferDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  // offer description
  @IsString()
  @IsNotEmpty()
  description: string;

  // offer requirements
  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsOptional()
  icon?: string;

  // offer thumbnail image url
  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  // size of offer thumbnail image - large, small
  @IsEnum(OfferBoxSizeEnum)
  @IsNotEmpty()
  boxSize: OfferBoxSizeEnum;

  // indicates if offer is available for desktop
  @IsBoolean()
  @IsNotEmpty()
  isDesktop: number;

  // indicates if offer is available for android
  @IsBoolean()
  @IsNotEmpty()
  isAndroid: number;

  // indicates if offer is available for ios
  @IsBoolean()
  @IsNotEmpty()
  isIos: number;

  // offer url template
  @IsString()
  @IsNotEmpty()
  offerUrlTemplate: string;

  // provider name - this should be static for each offer type
  // we're attaching two offer payloads - offer1, offer2
  // so for offer1 payload, this should be "offer1"
  // for offer2 payload, this should be "offer2"
  @IsString()
  @IsNotEmpty()
  providerName: string;

  // offer id from external provider
  @IsString()
  @IsNotEmpty()
  externalOfferId: string;
}