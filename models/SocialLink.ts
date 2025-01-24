import { SocialPlatform } from "@/types/socialPlatform";

/**
 * Modèle des liens pour les réseaux sociaux.
 */
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  alt: string;
}
