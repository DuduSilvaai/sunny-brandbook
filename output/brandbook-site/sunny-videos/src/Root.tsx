import "./index.css";
import { Composition, Folder } from "remotion";
import { HeroBrandbook } from "./HeroBrandbook";
import { LogoReveal } from "./LogoReveal";
import { DashboardShowcase } from "./DashboardShowcase";
import { ColorPaletteShowcase } from "./ColorPaletteShowcase";
import { TypographyShowcase } from "./TypographyShowcase";
import { TokenSystemShowcase } from "./TokenSystemShowcase";
import { MockupShowcase } from "./MockupShowcase";
import { ActivationShowcase } from "./ActivationShowcase";
import { SDRAgentDemo } from "./SDRAgentDemo";
import { BusinessCardReveal } from "./BusinessCardReveal";
import { PipelineAnimation } from "./PipelineAnimation";
import { DawnReportAnimation } from "./DawnReportAnimation";
import { SolarFarmAerial } from "./SolarFarmAerial";
import { LogoColorTransitions } from "./LogoColorTransitions";
import { LeadMortoVivo } from "./LeadMortoVivo";
import { OfficeReceptionSign } from "./OfficeReceptionSign";
import { DataWarRoom } from "./DataWarRoom";
import { TradeShowBooth } from "./TradeShowBooth";
import { SocialMediaStory } from "./SocialMediaStory";
import { BrandFilmFinale } from "./BrandFilmFinale";

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="Sunny-Brandbook">
      {/* ORIGINAL 8 */}
      <Composition id="HeroBrandbook" component={HeroBrandbook} durationInFrames={300} fps={30} width={1920} height={1080} />
      <Composition id="LogoReveal" component={LogoReveal} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="DashboardShowcase" component={DashboardShowcase} durationInFrames={330} fps={30} width={1920} height={1080} />
      <Composition id="ColorPaletteShowcase" component={ColorPaletteShowcase} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="TypographyShowcase" component={TypographyShowcase} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="TokenSystemShowcase" component={TokenSystemShowcase} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="MockupShowcase" component={MockupShowcase} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="ActivationShowcase" component={ActivationShowcase} durationInFrames={180} fps={30} width={1920} height={1080} />

      {/* NEWLY ADDED 12 */}
      <Composition id="SDRAgentDemo" component={SDRAgentDemo} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="BusinessCardReveal" component={BusinessCardReveal} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="PipelineAnimation" component={PipelineAnimation} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="DawnReportAnimation" component={DawnReportAnimation} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="SolarFarmAerial" component={SolarFarmAerial} durationInFrames={150} fps={30} width={1920} height={1080} />
      <Composition id="LogoColorTransitions" component={LogoColorTransitions} durationInFrames={150} fps={30} width={1920} height={1080} />
      <Composition id="LeadMortoVivo" component={LeadMortoVivo} durationInFrames={150} fps={30} width={1920} height={1080} />
      <Composition id="OfficeReceptionSign" component={OfficeReceptionSign} durationInFrames={150} fps={30} width={1920} height={1080} />
      <Composition id="DataWarRoom" component={DataWarRoom} durationInFrames={210} fps={30} width={1920} height={1080} />
      <Composition id="TradeShowBooth" component={TradeShowBooth} durationInFrames={180} fps={30} width={1920} height={1080} />
      <Composition id="SocialMediaStory" component={SocialMediaStory} durationInFrames={150} fps={30} width={1080} height={1920} />
      <Composition id="BrandFilmFinale" component={BrandFilmFinale} durationInFrames={180} fps={30} width={1920} height={1080} />
    </Folder>
  );
};
