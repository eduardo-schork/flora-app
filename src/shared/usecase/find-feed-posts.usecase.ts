import HttpRequestPort from '@/src/infra/http-request/http-request-port';

async function execute() {
    try {
        const response: any = await HttpRequestPort.get({ path: '/get-posts' });

        const postsData: any[] =
            (response?.posts && Object.values(response?.posts)) || [];

        postsData?.reverse();

        return postsData;
    } catch (error) {
        console.warn({ error });
    }
}

const FindFeedPostsUsecase = {
    execute
};

export default FindFeedPostsUsecase;
