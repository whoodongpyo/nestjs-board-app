import { BadRequestException, PipeTransform } from '@nestjs/common';
import { PostStatus } from '../post-status-enum';

export class PostStatusValidationPipe implements PipeTransform {
  readonly StatusOption = [PostStatus.PRIVATE, PostStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} isn't in the status options.`);
    }

    return value;
  }

  private isValidStatus(status: PostStatus) {
    const isValidStatus = this.StatusOption.includes(status);

    return isValidStatus;
  }
}
