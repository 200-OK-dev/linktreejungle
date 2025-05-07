import { ProfileBackground } from '@/components/profile/profile-background';
import { ProfileContainer } from '@/components/profile/profile-container';
import { ProfileHeader } from '@/components/profile/profile-header';
import { LinksContainer } from '@/components/links/links-container';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="h-screen p-0 tive overflow-hidden">
      <ProfileBackground />
      <div className="relative z-10 px-4 h-screen flex flex-col items-center justify-center">
        <ProfileContainer>
          <ProfileHeader 
            username="@JungleGlass" 
            bio="Glass Artist // Portor de cuadro fijo🎪✨ Escultor 🧿 一生⛩" 
          />
          <LinksContainer />
          <Footer />
        </ProfileContainer>
      </div>
    </main>
  );
}