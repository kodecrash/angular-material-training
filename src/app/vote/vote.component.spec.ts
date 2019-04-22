

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {

  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should increment vote when upvote called', () => {
     component.upVote();
     expect(component.totalVotes).toBe(1);
  });

  it('should decrement vote when downvote called', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

});
