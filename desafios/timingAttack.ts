import { timingSafeEqual } from "crypto";
import { Buffer } from "buffer";

class loginSystem {
  private comparePasswords(pass1: string, pass2: string): boolean {
    // Assume passwords are already hashed

    try {
      return timingSafeEqual(Buffer.from(pass1, "utf8"), Buffer.from(pass2, "utf8"));
    } catch {
      return false;
    }
  }

  // This is code is not meant to work it is just a snippet

  async findByLogin({ email, pass }) {
    const user = await this.repo.findOne({ where: { email } });
    let hash = user?.password;

    if (!user) {
      hash = await bcrypt.hash(Math.random().toString(36), 8);
    }

    const compare = await this.comparePasswords(hash, pass);

    if (!compare) {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }

    return UserDTO.fromEntity(user);
  }
}
